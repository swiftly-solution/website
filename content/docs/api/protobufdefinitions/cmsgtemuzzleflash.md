---
title: CMsgTEMuzzleFlash
---

# Interface CMsgTEMuzzleFlash

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEMuzzleFlash.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTEMuzzleFlash : ITypedProtobuf<CMsgTEMuzzleFlash>, INativeHandle, INetMessage<CMsgTEMuzzleFlash>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgTEMuzzleFlash>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgTEMuzzleFlash>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Angles

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEMuzzleFlash.cs#L21)

```csharp
QAngle Angles { get; set; }
```

#### Property Value

- [QAngle](/docs/api/natives/qangle)

### Origin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEMuzzleFlash.cs#L18)

```csharp
Vector Origin { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Scale

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEMuzzleFlash.cs#L24)

```csharp
float Scale { get; set; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Type

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTEMuzzleFlash.cs#L27)

```csharp
uint Type { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

