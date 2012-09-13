# Problem presented as:
# 1131 => 211311
# [2 1's][1 1's][1 3's][1 1's]
# repeat
#
# RLE in other terms

def digitcount(num)
  # Convert the number into an array, 1131 -> [1,1,3,1] so we can iterate through
  digits = num.to_s.chars.map(&:to_i)
  # Track the count of seen numbers
  count = 0
  # Track the n-1 array value
  prev = nil
  # The resulting string
  result = ''
  
  # For each digit
  digits.each do |d|
    if prev == d
      # If it's the same number as we've seen before we should inc the counter
      count += 1
    else
      # This isn't a match, so output the previous count and number, reset the counter and carry on
      result += count.to_s + prev.to_s if count > 0
      count = 1
    end
    # In the next loop iteration the previous is the current digit
    prev = d
  end
  
  # Return the result, don't forget the last digit we inspected
  return result += count.to_s + prev.to_s
end

def nextfive(num)
  5.times do
    r = digitcount(num)
    puts r
    num = r
  end
end

nextfive(1131)