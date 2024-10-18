export const getResume = async function () {
  const res = await fetch(
    `https://registry.jsonresume.org/BrunoMaiaPinto.json?timestamp=${Date.now()}`
  );
  const data = await res.json();
  return data;
};
