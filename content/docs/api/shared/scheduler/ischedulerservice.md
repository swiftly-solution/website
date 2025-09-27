---
title: ISchedulerService
---

```csharp
public interface ISchedulerService
```

## Methods

**Delay(int, Action)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L17)

```csharp
CancellationTokenSource Delay(int delayTick, Action task)
```

#### Parameters

- **delayTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The delay of the timer in ticks.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

**DelayAndRepeat(int, int, Action)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L35)

```csharp
CancellationTokenSource DelayAndRepeat(int delayTick, int periodTick, Action task)
```

#### Parameters

- **delayTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The delay of the timer in ticks.
- **periodTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The period of the timer in ticks.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

**DelayAndRepeatBySeconds(float, float, Action)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L68)

```csharp
CancellationTokenSource DelayAndRepeatBySeconds(float delaySeconds, float periodSeconds, Action task)
```

#### Parameters

- **delaySeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay of the timer in seconds.
- **periodSeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The period of the timer in seconds.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

**DelayBySeconds(float, Action)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L46)

```csharp
CancellationTokenSource DelayBySeconds(float delaySeconds, Action task)
```

#### Parameters

- **delaySeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay of the timer in seconds.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

**NextTick(Action)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L9)

```csharp
void NextTick(Action task)
```

#### Parameters

- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

**Repeat(int, Action)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L26)

```csharp
CancellationTokenSource Repeat(int periodTick, Action task)
```

#### Parameters

- **periodTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The period of the timer in ticks.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

**RepeatBySeconds(float, Action)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L57)

```csharp
CancellationTokenSource RepeatBySeconds(float periodSeconds, Action task)
```

#### Parameters

- **periodSeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The period of the timer in seconds.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

**StopOnMapChange(CancellationTokenSource)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L74)

```csharp
void StopOnMapChange(CancellationTokenSource cts)
```

#### Parameters

- **cts**: [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - The CancellationTokenSource to stop.

