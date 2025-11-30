---
title: MLTick
---

# Interface MLTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLTick.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface MLTick : ITypedProtobuf<MLTick>, INativeHandle
```

#### Implements

- [ITypedProtobuf<MLTick>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Events

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLTick.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<MLEvent> Events { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[MLEvent](/docs/api/protobufdefinitions/mlevent)>

### State

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLTick.cs#L16)

```csharp
MLGameState State { get; }
```

#### Property Value

- [MLGameState](/docs/api/protobufdefinitions/mlgamestate)

### TickCount

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLTick.cs#L13)

```csharp
int TickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

