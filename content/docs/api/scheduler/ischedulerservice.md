---
title: ISchedulerService
---

# Interface ISchedulerService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Scheduler](/docs/api/scheduler)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ISchedulerService
```

## Methods

### Delay(int, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L24)

Add a delayed task to the scheduler.

```csharp
CancellationTokenSource Delay(int delayTick, Action task)
```

#### Parameters

- **delayTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The delay of the timer in ticks.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

### DelayAndRepeat(int, int, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L42)

Add a delayed and repeated task to the scheduler.

```csharp
CancellationTokenSource DelayAndRepeat(int delayTick, int periodTick, Action task)
```

#### Parameters

- **delayTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The delay of the timer in ticks.
- **periodTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The period of the timer in ticks.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

### DelayAndRepeatBySeconds(float, float, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L75)

Add a delayed and repeated task to the scheduler.

The timing is based on game tick, which means it becomes inaccurate when intervals approachs 1 tick (approximately 15ms).

```csharp
CancellationTokenSource DelayAndRepeatBySeconds(float delaySeconds, float periodSeconds, Action task)
```

#### Parameters

- **delaySeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay of the timer in seconds.
- **periodSeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The period of the timer in seconds.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

### DelayBySeconds(float, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L53)

Add a delayed task to the scheduler.

The timing is based on game tick, which means it becomes inaccurate when intervals approachs 1 tick (approximately 15ms).

```csharp
CancellationTokenSource DelayBySeconds(float delaySeconds, Action task)
```

#### Parameters

- **delaySeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The delay of the timer in seconds.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

### NextTick(Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L10)

Add a task to be executed on the next tick.

```csharp
void NextTick(Action task)
```

#### Parameters

- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

### NextWorldUpdate(Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L16)

Add a task to be executed on the next world update.

```csharp
void NextWorldUpdate(Action task)
```

#### Parameters

- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

### Repeat(int, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L33)

Add a repeated task to the scheduler.
This will be executed once immediately, and then every periodTick ticks.

```csharp
CancellationTokenSource Repeat(int periodTick, Action task)
```

#### Parameters

- **periodTick**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The period of the timer in ticks.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

### RepeatBySeconds(float, Action)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L64)

Add a repeated task to the scheduler.
This will be executed once immediately, and then every periodSeconds seconds.

The timing is based on game tick, which means it becomes inaccurate when intervals approachs 1 tick (approximately 15ms).

```csharp
CancellationTokenSource RepeatBySeconds(float periodSeconds, Action task)
```

#### Parameters

- **periodSeconds**: [float](https://learn.microsoft.com/dotnet/api/system.single) - The period of the timer in seconds.
- **task**: [Action](https://learn.microsoft.com/dotnet/api/system.action) - The task to execute.

#### Returns

- [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - A CancellationTokenSource that can be used to cancel the timer.

### StopOnMapChange(CancellationTokenSource)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Scheduler/ISchedulerService.cs#L81)

Stop a timer when the map changes.

```csharp
void StopOnMapChange(CancellationTokenSource cts)
```

#### Parameters

- **cts**: [CancellationTokenSource](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtokensource) - The CancellationTokenSource to stop.

