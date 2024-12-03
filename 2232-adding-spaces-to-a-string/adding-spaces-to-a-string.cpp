class Solution {
public:
    string addSpaces(string s, vector<int>& spaces) {
        
        string res;
        int spaces_index = 0;
        int n = spaces.size();

        for(int i = 0; i < s.length(); i++){
            if (spaces_index < n && i == spaces[spaces_index]) {
                res += " ";
                spaces_index++;
            }
            res += s[i];
        }

        return res;

    }
};