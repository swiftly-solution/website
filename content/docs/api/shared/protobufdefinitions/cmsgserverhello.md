---
title: CMsgServerHello
---

```csharp
public interface CMsgServerHello : ITypedProtobuf<CMsgServerHello>, INativeHandle
```

#### Implements

## Properties

### ClientLauncher

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L22)

```csharp
uint ClientLauncher { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LegacyClientSessionNeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L19)

```csharp
uint LegacyClientSessionNeed { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LegacySteamdatagramRouting

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L25)

```csharp
byte[] LegacySteamdatagramRouting { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### RequiredInternalAddr

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L28)

```csharp
uint RequiredInternalAddr { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SocacheControl

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L34)

```csharp
uint SocacheControl { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### SocacheHaveVersions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L16)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgSOCacheHaveVersion> SocacheHaveVersions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgSOCacheHaveVersion](/docs/api/shared/protobufdefinitions/cmsgsocachehaveversion)>

### SteamdatagramLogin

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L31)

```csharp
byte[] SteamdatagramLogin { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### Version

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgServerHello.cs#L13)

```csharp
uint Version { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

