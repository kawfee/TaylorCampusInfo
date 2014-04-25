//
//  ViewController.m
//  Taylor University Info
//
//  Created by Bryant_Sell on 4/22/14.
//  Copyright (c) 2014 Taylor University. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    //NSString *fullURL = @"http://cse.taylor.edu/~pbrocker/Html-Javascript/";
    NSString *fullURL = @"file:///Volumes/Macintosh%20HD%202/Users/Bryant/GitHub/TaylorCampusInfo/Website/index.html";
    NSURL *url = [NSURL URLWithString:fullURL];
    NSURLRequest *requestObj = [NSURLRequest requestWithURL:url];
    [_viewWeb loadRequest:requestObj];
    UISwipeGestureRecognizer * swipeRight = [[UISwipeGestureRecognizer alloc] initWithTarget:self action:@selector(swipeRight:)];
    swipeRight.direction = UISwipeGestureRecognizerDirectionRight;
    [self.view addGestureRecognizer:swipeRight];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

- (void)swipeRight:(UISwipeGestureRecognizer*)gestureRecognizer{
    if([_viewWeb canGoBack]){
        [_viewWeb goBack];
    }
}

@end
