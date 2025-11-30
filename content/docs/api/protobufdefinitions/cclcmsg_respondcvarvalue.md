---
title: CCLCMsg_RespondCvarValue
---

# Interface CCLCMsg_RespondCvarValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RespondCvarValue.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCLCMsg_RespondCvarValue : ITypedProtobuf<CCLCMsg_RespondCvarValue>, INativeHandle, INetMessage<CCLCMsg_RespondCvarValue>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCLCMsg_RespondCvarValue>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCLCMsg_RespondCvarValue>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Cookie

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RespondCvarValue.cs#L18)

```csharp
int Cookie { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RespondCvarValue.cs#L24)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### StatusCode

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RespondCvarValue.cs#L21)

```csharp
int StatusCode { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Value

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCLCMsg_RespondCvarValue.cs#L27)

```csharp
string Value { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

