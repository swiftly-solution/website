---
title: CUserMessageVoiceMask
---

```csharp
public interface CUserMessageVoiceMask : ITypedProtobuf<CUserMessageVoiceMask>, INativeHandle, INetMessage<CUserMessageVoiceMask>, IDisposable
```

#### Implements

## Properties

**BanMasks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageVoiceMask.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<uint> BanMasks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**GamerulesMasks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageVoiceMask.cs#L18)

```csharp
IProtobufRepeatedFieldValueType<uint> GamerulesMasks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

**ModEnable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageVoiceMask.cs#L24)

```csharp
bool ModEnable { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

