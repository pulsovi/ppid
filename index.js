const findProcess = require('find-process');

async function printPPInfos(pid) {
  const [proc] = await findProcess('pid', pid);

  if (!proc) return;
  await printPPInfos(proc.ppid);
  console.info(`${proc.pid}\t${proc.name}\t${proc.cmd}`);
}

module.exports = {
  printPPInfos,
};
