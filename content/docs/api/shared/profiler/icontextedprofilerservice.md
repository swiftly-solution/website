---
title: IContextedProfilerService
---

```csharp
public interface IContextedProfilerService
```

## Methods

### **RecordTime(string, double)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Profiler/IContextedProfilerService.cs#L22)

```csharp
void RecordTime(string name, double duration)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the profile to record the time for.
- **duration**: [double](https://learn.microsoft.com/dotnet/api/system.double) - The duration to record.

### **StartRecording(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Profiler/IContextedProfilerService.cs#L9)

```csharp
void StartRecording(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the profile to start.

### **StopRecording(string)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Profiler/IContextedProfilerService.cs#L15)

```csharp
void StopRecording(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the profile to stop.

