---
title: CUserMessageVoiceMask
---

# Interface CUserMessageVoiceMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageVoiceMask.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMessageVoiceMask : ITypedProtobuf<CUserMessageVoiceMask>, INativeHandle, INetMessage<CUserMessageVoiceMask>, IDisposable
```

#### Implements

- [ITypedProtobuf<CUserMessageVoiceMask>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CUserMessageVoiceMask>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### BanMasks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageVoiceMask.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<uint> BanMasks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### GamerulesMasks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageVoiceMask.cs#L18)

```csharp
IProtobufRepeatedFieldValueType<uint> GamerulesMasks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ModEnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageVoiceMask.cs#L24)

```csharp
bool ModEnable { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

