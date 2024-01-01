int busyStudent(int* startTime, int startTimeSize, int* endTime, int endTimeSize, int queryTime) {
    
    int count;
    int i;

    count = 0;


    for(i = 0; i < startTimeSize; i++){
        if(startTime[i] <= queryTime && endTime[i] >= queryTime){
            count++;
        }
    }

    return count;

}