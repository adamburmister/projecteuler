# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 99.
# 
# Find the largest palindrome made from the product of two 3-digit numbers.

def get_highest_palindrome(high, low)
  highest = 0
  high.downto low do |i|
    high.downto low do |j|
      product = i * j
      # No point searching when the result is less than the current winner
      break if product <= highest
      highest = product if product.to_s == product.to_s.reverse
    end
  end
  highest
end

puts get_highest_palindrome(999, 100)