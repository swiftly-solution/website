---
title: C2S_CONNECT_Message
---

```csharp
public interface C2S_CONNECT_Message : ITypedProtobuf<C2S_CONNECT_Message>, INativeHandle
```

#### Implements

## Properties

### **AuthProtocol** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L16)

```csharp
uint AuthProtocol { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **AuthSteam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L34)

```csharp
byte[] AuthSteam { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **ChallengeContext** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L37)

```csharp
string ChallengeContext { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ChallengeNumber** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L19)

```csharp
uint ChallengeNumber { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **EncryptedPassword** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L28)

```csharp
byte[] EncryptedPassword { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### **HostVersion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L13)

```csharp
uint HostVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **LocalhostSameProcessCheck** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L40)

```csharp
C2S_CONNECT_SameProcessCheck LocalhostSameProcessCheck { get; }
```

#### Property Value

- [C2S_CONNECT_SameProcessCheck](/docs/api/shared/protobufdefinitions/c2s_connect_sameprocesscheck)

### **LowViolence** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L25)

```csharp
bool LowViolence { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ReservationCookie** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L22)

```csharp
ulong ReservationCookie { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **Splitplayers** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECT_Message.cs#L31)

```csharp
IProtobufRepeatedFieldSubMessageType<CCLCMsg_SplitPlayerConnect> Splitplayers { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCLCMsg_SplitPlayerConnect](/docs/api/shared/protobufdefinitions/cclcmsg_splitplayerconnect)>

