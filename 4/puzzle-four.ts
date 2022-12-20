export const numberOfEncompassedAssignments = (input: string) => {
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

export const numberOfOverlappingAssignments = (input: string) => {
  const split_input = input.split('\n');
  const trimmed_input = split_input.map((val) => val.trim());

  return trimmed_input.reduce((running_total, assignment_pair) => {
    const [first, second] = assignment_pair.split(',');
    const [first_min, first_max] = first.split('-');
    const [second_min, second_max] = second.split('-');

    const first_min_in_second = +first_min >= +second_min && +first_min <= +second_max;
    const second_min_in_first = +second_min >= +first_min && +second_min <= +first_max;

    if (first_min_in_second || second_min_in_first) return running_total + 1;

    return running_total;
  }, 0);
};

