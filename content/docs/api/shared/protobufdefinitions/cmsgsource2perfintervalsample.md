---
title: CMsgSource2PerfIntervalSample
---

```csharp
public interface CMsgSource2PerfIntervalSample : ITypedProtobuf<CMsgSource2PerfIntervalSample>, INativeHandle
```

#### Implements

## Properties

### FrameCount

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L22)

```csharp
int FrameCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FrameTimeAvgMs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L16)

```csharp
float FrameTimeAvgMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FrameTimeMaxMs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L13)

```csharp
float FrameTimeMaxMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FrameTimeMinMs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L19)

```csharp
float FrameTimeMinMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FrameTimeTotalMs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L25)

```csharp
float FrameTimeTotalMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Tags

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2PerfIntervalSample_Tag> Tags { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSource2PerfIntervalSample_Tag](/docs/api/shared/protobufdefinitions/cmsgsource2perfintervalsample_tag)>

