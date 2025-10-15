---
title: MLEvent
---

```csharp
public interface MLEvent : ITypedProtobuf<MLEvent>, INativeHandle
```

#### Implements

## Properties

### Data

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLEvent.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<MLDict> Data { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[MLDict](/docs/api/shared/protobufdefinitions/mldict)>

### EventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLEvent.cs#L13)

```csharp
string EventName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

