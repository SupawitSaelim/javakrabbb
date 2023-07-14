const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

const announcements = finalParticipants.map((member) => {
    return member + ' joined the contest.';
});

console.log(announcements);

/* Explain map method
    *
    * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
*/