---
title: CUserMessage_Diagnostic_Response
---

# Interface CUserMessage_Diagnostic_Response

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMessage_Diagnostic_Response : ITypedProtobuf<CUserMessage_Diagnostic_Response>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CUserMessage_Diagnostic_Response>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### BuildVersion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L16)

```csharp
int BuildVersion { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Diagnostics

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_Diagnostic_Response_Diagnostic> Diagnostics { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CUserMessage_Diagnostic_Response_Diagnostic](/docs/api/protobufdefinitions/cusermessage_diagnostic_response_diagnostic)>

### Instance

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L19)

```csharp
int Instance { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Osversion

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L25)

```csharp
int Osversion { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Platform

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L28)

```csharp
int Platform { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### StartTime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L22)

```csharp
long StartTime { get; set; }
```

#### Property Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

