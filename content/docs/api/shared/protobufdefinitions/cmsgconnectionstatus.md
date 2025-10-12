---
title: CMsgConnectionStatus
---

```csharp
public interface CMsgConnectionStatus : ITypedProtobuf<CMsgConnectionStatus>, INativeHandle
```

#### Implements

## Properties

### ClientSessionNeed

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L16)

```csharp
uint ClientSessionNeed { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### EstimatedWaitSecondsRemaining

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L28)

```csharp
int EstimatedWaitSecondsRemaining { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QueuePosition

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L19)

```csharp
int QueuePosition { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### QueueSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L22)

```csharp
int QueueSize { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Status

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L13)

```csharp
GCConnectionStatus Status { get; set; }
```

#### Property Value

- [GCConnectionStatus](/docs/api/shared/protobufdefinitions/gcconnectionstatus)

### WaitSeconds

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgConnectionStatus.cs#L25)

```csharp
int WaitSeconds { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

