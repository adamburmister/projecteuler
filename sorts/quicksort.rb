def quicksort(array)
  return array if array.nil? || array.size <= 1
  pivot = array[0]
  left, right = array[1..-1].partition { |i| i < pivot }
  quicksort(left) + [ pivot ] + quicksort(right)
end

a = [5,1,4,3,2,6,9,8,7]
puts a.inspect, quicksort(a).inspect