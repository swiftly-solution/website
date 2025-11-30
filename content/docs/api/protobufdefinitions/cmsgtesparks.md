---
title: CMsgTESparks
---

# Interface CMsgTESparks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTESparks.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgTESparks : ITypedProtobuf<CMsgTESparks>, INativeHandle, INetMessage<CMsgTESparks>, IDisposable
```

#### Implements

- [ITypedProtobuf<CMsgTESparks>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CMsgTESparks>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Direction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTESparks.cs#L27)

```csharp
Vector Direction { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Length

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTESparks.cs#L24)

```csharp
uint Length { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Magnitude

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTESparks.cs#L21)

```csharp
uint Magnitude { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Origin

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTESparks.cs#L18)

```csharp
Vector Origin { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

