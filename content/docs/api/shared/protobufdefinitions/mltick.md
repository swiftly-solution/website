---
title: MLTick
---

```csharp
public interface MLTick : ITypedProtobuf<MLTick>, INativeHandle
```

#### Implements

## Properties

**Events** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLTick.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<MLEvent> Events { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[MLEvent](/docs/api/shared/protobufdefinitions/mlevent)>

**State** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLTick.cs#L16)

```csharp
MLGameState State { get; }
```

#### Property Value

- [MLGameState](/docs/api/shared/protobufdefinitions/mlgamestate)

**TickCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLTick.cs#L13)

```csharp
int TickCount { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

