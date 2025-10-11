---
title: CUserMessage_Diagnostic_Response
---

```csharp
public interface CUserMessage_Diagnostic_Response : ITypedProtobuf<CUserMessage_Diagnostic_Response>, INativeHandle
```

#### Implements

## Properties

### **BuildVersion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L16)

```csharp
int BuildVersion { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Diagnostics** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CUserMessage_Diagnostic_Response_Diagnostic> Diagnostics { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CUserMessage_Diagnostic_Response_Diagnostic](/docs/api/shared/protobufdefinitions/cusermessage_diagnostic_response_diagnostic)>

### **Instance** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L19)

```csharp
int Instance { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Osversion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L25)

```csharp
int Osversion { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Platform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L28)

```csharp
int Platform { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **StartTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_Diagnostic_Response.cs#L22)

```csharp
long StartTime { get; set; }
```

#### Property Value

- [long](https://learn.microsoft.com/dotnet/api/system.int64)

