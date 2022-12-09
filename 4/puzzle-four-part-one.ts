/*
  Assignment pair example
  - [1-2,2-2]
  - [1-2,1-2]
*/

export const numberOfOverlappingAssignments = (input: string) => {
  const split_input = input.split('\n');
  const trimmed_input = split_input.map((val) => val.trim());

  return trimmed_input.reduce((running_total, assignment_pair) => {
    const [first, second] = assignment_pair.split(',');
    const [pair_one_a, pair_one_b] = first.split('-');
    const [pair_two_a, pair_two_b] = second.split('-');

    const is_one_inside_of_two = +pair_one_a >= +pair_two_a && +pair_one_b <= +pair_two_b;
    const is_two_inside_of_one = +pair_one_a <= +pair_two_a && +pair_one_b >= +pair_two_b;

    if (is_one_inside_of_two) return running_total + 1;
    if (is_two_inside_of_one) return running_total + 1;

    return running_total;
  }, 0);
};
