### Orders:   

        exid   order_id    price  quantity  side  timestamp type

0   99999999  p999999_a  1001595         1  sell          0  add
1   99999999  p999999_b   998645         1   buy          0  add
2          1      p34_1   998648         1  sell          2  add
3          2       p2_1   998711         1  sell          2  add
4          3      p30_1   998787         1  sell          2  add

### mmp:

   cash_flow mmid  position  timestamp
0   -1001581   m0         1         24
1   -2003159   m0         2         25
2   -1001561   m0         1         30
3         38   m0         0         32
4    1001639   m0        -1         39

### tob:

   ask_size  best_ask  best_bid  bid_size   lag_spread  timestamp
0         1   1001595    998645         1     0.000000          0
1         1    998648    998645         1  1475.000000          2
2         1    998648    998645         1   984.333333          2
3         1    998648    998645         1   739.000000          2
4         1    998648    998645         1   591.800000          3


### trades:

  incoming_order_id    price  quantity resting_order_id  resting_timestamp  side  timestamp
0             t36_1  1001594         1            p13_1                  3  sell         20
1             t44_1  1001594         1            p28_1                 13  sell         21
2             t36_2  1001595         1        p999999_a                  0   buy         22
3             t44_2  1001586         1             p2_1                  2  sell         24
4             t34_1  1001581         1            m0_32                 22  sell         24


### qtl:

   qt_take    lambda_t
0    0.500 -100.000000
1    0.501 -110.258435
2    0.502 -120.516870
3    0.501 -110.258435
4    0.500 -100.000000