function splitName(fullName) {
  const regex = /^(\w+)(?: (\w+))* (\w+)$/;

  const match = fullName.match(regex);

  if (!match) {
      return null;
  }

  const firstNames = match.slice(1, -1).filter(Boolean);
  const lastName = match[match.length - 1];

  return {
      firstNames,
      lastName
  };
}
