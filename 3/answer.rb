# The prime factors of 13195 are 5, 7, 13 and 29.
# 
# What is the largest prime factor of the number 600851475143 ?

def find_highest_prime_factor(n)
  # Read http://joezack.com/index.php/2009/01/15/project-euler-problem-3-in-ruby/ - which points out you can
  # stop searching at the square root of a number. Speedup!
  (Math.sqrt(n).ceil).downto 2 do |i|
    if n % i == 0 && find_highest_prime_factor(i) == 1
      return i
    end
  end
  1
end

puts find_highest_prime_factor(600851475143)