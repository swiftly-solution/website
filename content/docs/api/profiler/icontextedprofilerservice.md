---
title: IContextedProfilerService
---

# Interface IContextedProfilerService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Profiler/IContextedProfilerService.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Profiler](/docs/api/profiler)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IContextedProfilerService
```

## Methods

### RecordTime(string, double)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Profiler/IContextedProfilerService.cs#L22)

Record the time taken for the given profile.

```csharp
void RecordTime(string name, double duration)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the profile to record the time for.
- **duration**: [double](https://learn.microsoft.com/dotnet/api/system.double) - The duration to record.

### StartRecording(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Profiler/IContextedProfilerService.cs#L9)

Start recording a new profile with the given name.

```csharp
void StartRecording(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the profile to start.

### StopRecording(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Profiler/IContextedProfilerService.cs#L15)

Stop recording the profile with the given name.

```csharp
void StopRecording(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the profile to stop.

