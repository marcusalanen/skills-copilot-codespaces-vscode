/**
 * Creates a member object with predefined properties.
 *
 * @returns {Object} An object representing a member with name, age, and skills properties.
 * @returns {string} return.name - The name of the member.
 * @returns {number} return.age - The age of the member.
 * @returns {string[]} return.skills - An array of skills the member possesses.
 */
function skillsMember(){
  var member = {
    name: 'John Doe',
    age: 30,
    skills: ['JavaScript', 'NodeJS', 'ReactJS']
  };
  return member;
}