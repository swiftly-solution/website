---
title: CMsgSource2PerfIntervalSample
---

# Interface CMsgSource2PerfIntervalSample

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgSource2PerfIntervalSample : ITypedProtobuf<CMsgSource2PerfIntervalSample>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgSource2PerfIntervalSample>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### FrameCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L22)

```csharp
int FrameCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### FrameTimeAvgMs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L16)

```csharp
float FrameTimeAvgMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FrameTimeMaxMs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L13)

```csharp
float FrameTimeMaxMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FrameTimeMinMs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L19)

```csharp
float FrameTimeMinMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### FrameTimeTotalMs

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L25)

```csharp
float FrameTimeTotalMs { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Tags

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgSource2PerfIntervalSample.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSource2PerfIntervalSample_Tag> Tags { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgSource2PerfIntervalSample_Tag](/docs/api/protobufdefinitions/cmsgsource2perfintervalsample_tag)>

