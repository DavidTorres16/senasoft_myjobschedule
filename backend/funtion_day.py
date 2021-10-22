from datetime import datetime

def lastday(year, month):
    days_per_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    day = days_per_month[month - 1]
    if month == 2 and (year % 4 == 0 and year % 100 != 0 or year % 400 == 0):
        d = 29
    
    
    return day


