const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise(resolve => rl.question(prompt, answer => resolve(answer)));
}

function normalizeRole(r) {
  if (!r) return '';
  return r.trim().toLowerCase();
}

function isValidRole(roleLower) {
  return roleLower === 'penyihir' || roleLower === 'guard' || roleLower === 'werewolf';
}

function capitalizeRole(roleLower) {
  if (roleLower === 'penyihir') return 'Penyihir';
  if (roleLower === 'guard') return 'Guard';
  if (roleLower === 'werewolf') return 'Werewolf';
  return null;
}

async function playGameInteractive(nama, peranInitial) {
  const name = String(nama ?? '').trim();
  if (!name) {
    console.log('Nama harus diisi!');
    rl.close();
    return;
  }

  let peranRaw = String(peranInitial ?? '').trim();

  // If initial peran provided but empty or invalid, keep asking until valid
  while (true) {
    if (!peranRaw) {
      peranRaw = await question('Masukkan peran (Penyihir / Guard / Werewolf): ');
    }

    const roleLower = normalizeRole(peranRaw);

    if (isValidRole(roleLower)) {
      const role = capitalizeRole(roleLower);
      console.log(`Selamat datang di Dunia Werewolf, ${name}`);
      if (role === 'Penyihir') {
        console.log(`Halo Penyihir ${name}, kamu dapat melihat siapa yang menjadi werewolf!`);
      } else if (role === 'Guard') {
        console.log(`Halo Guard ${name}, kamu akan membantu melindungi temanmu dari serangan werewolf.`);
      } else if (role === 'Werewolf') {
        console.log(`Halo Werewolf ${name}, Kamu akan memakan mangsa setiap malam!`);
      }
      break;
    } else {
      console.log('Peran tidak valid. Pilih salah satu: Penyihir, Guard, atau Werewolf.');
      peranRaw = ''; 
      // loop continues
    }
  }

  rl.close();
}

// Check command line arguments for name and role
const args = process.argv.slice(2);
if (args.length > 0) {
  const namaArg = args[0];
  const peranArg = args[1] ?? '';
  playGameInteractive(namaArg, peranArg);
} else {
  // Fully interactive: ask for name first, then enter same role loop
  (async () => {
    const nama = await question('Masukkan nama: ');
    await playGameInteractive(nama, '');
    // rl closed inside playGameInteractive
  })();
}