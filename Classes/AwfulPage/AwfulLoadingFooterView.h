//
//  AwfulPullToNavigateView.h
//  Awful
//
//  Created by me on 5/10/12.
//  Copyright (c) 2012 Regular Berry Software LLC. All rights reserved.
//

#import "EGORefreshTableHeaderView.h"

@interface AwfulLoadingFooterView : EGORefreshTableHeaderView <UIScrollViewDelegate>

-(void) setupInView:(UIScrollView*)scrollView;
@end
