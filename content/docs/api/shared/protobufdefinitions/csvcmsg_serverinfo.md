---
title: CSVCMsg_ServerInfo
---

```csharp
public interface CSVCMsg_ServerInfo : ITypedProtobuf<CSVCMsg_ServerInfo>, INativeHandle, INetMessage<CSVCMsg_ServerInfo>, IDisposable
```

- Implements

## Properties

### **AddonName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L57)

```csharp
string AddonName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **COs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L30)

```csharp
int COs { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **GameDir** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L45)

```csharp
string GameDir { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **GameSessionConfig** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L60)

```csharp
CSVCMsg_GameSessionConfiguration GameSessionConfig { get; }
```

- Property Value

- [CSVCMsg_GameSessionConfiguration](/docs/api/shared/protobufdefinitions/csvcmsg_gamesessionconfiguration)

### **GameSessionManifest** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L63)

```csharp
byte[] GameSessionManifest { get; set; }
```

- Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **HostName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L54)

```csharp
string HostName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **IsDedicated** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L24)

```csharp
bool IsDedicated { get; set; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **IsHltv** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L27)

```csharp
bool IsHltv { get; set; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MapName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L48)

```csharp
string MapName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **MaxClasses** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L36)

```csharp
int MaxClasses { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MaxClients** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L33)

```csharp
int MaxClients { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PlayerSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L39)

```csharp
int PlayerSlot { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Protocol** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L18)

```csharp
int Protocol { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ServerCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L21)

```csharp
int ServerCount { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **SkyName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L51)

```csharp
string SkyName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **TickInterval** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_ServerInfo.cs#L42)

```csharp
float TickInterval { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

