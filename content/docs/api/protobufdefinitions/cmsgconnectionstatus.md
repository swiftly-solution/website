---
title: CMsgConnectionStatus
---

# Interface CMsgConnectionStatus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgConnectionStatus : ITypedProtobuf<CMsgConnectionStatus>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgConnectionStatus>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### ClientSessionNeed

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L16)

```csharp
uint ClientSessionNeed { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EstimatedWaitSecondsRemaining

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L28)

```csharp
int EstimatedWaitSecondsRemaining { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QueuePosition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L19)

```csharp
int QueuePosition { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QueueSize

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L22)

```csharp
int QueueSize { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Status

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L13)

```csharp
GCConnectionStatus Status { get; set; }
```

#### Property Value

- [GCConnectionStatus](/docs/api/protobufdefinitions/gcconnectionstatus)

### WaitSeconds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L25)

```csharp
int WaitSeconds { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

