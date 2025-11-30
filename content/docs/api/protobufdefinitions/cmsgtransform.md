---
title: CMsgTransform
---

# Interface CMsgTransform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTransform.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTransform : ITypedProtobuf<CMsgTransform>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgTransform>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Orientation

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTransform.cs#L19)

```csharp
CMsgQuaternion Orientation { get; }
```

#### Property Value

- [CMsgQuaternion](/docs/api/protobufdefinitions/cmsgquaternion)

### Position

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTransform.cs#L13)

```csharp
Vector Position { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Scale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTransform.cs#L16)

```csharp
float Scale { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

