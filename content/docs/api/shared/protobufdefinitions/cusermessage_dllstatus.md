---
title: CUserMessage_DllStatus
---

```csharp
public interface CUserMessage_DllStatus : ITypedProtobuf<CUserMessage_DllStatus>, INativeHandle
```

#### Implements

## Properties

**ClientTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L28)

```csharp
ulong ClientTime { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

**CommandLine** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L16)

```csharp
string CommandLine { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Diagnostics** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L31)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_DllStatus_CVDiagnostic> Diagnostics { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CUserMessage_DllStatus_CVDiagnostic](/docs/api/shared/protobufdefinitions/cusermessage_dllstatus_cvdiagnostic)>

**FileReport** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L13)

```csharp
string FileReport { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**Modules** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L34)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_DllStatus_CModule> Modules { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CUserMessage_DllStatus_CModule](/docs/api/shared/protobufdefinitions/cusermessage_dllstatus_cmodule)>

**Osversion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L25)

```csharp
int Osversion { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**ProcessId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L22)

```csharp
uint ProcessId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**TotalFiles** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_DllStatus.cs#L19)

```csharp
uint TotalFiles { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

