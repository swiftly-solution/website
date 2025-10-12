---
title: CUserMessage_PlayResponseConditional
---

```csharp
public interface CUserMessage_PlayResponseConditional : ITypedProtobuf<CUserMessage_PlayResponseConditional>, INativeHandle, INetMessage<CUserMessage_PlayResponseConditional>, IDisposable
```

- Implements

## Properties

### **EntIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L18)

```csharp
int EntIndex { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **EntOrigin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L27)

```csharp
Vector EntOrigin { get; set; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **MixPriority** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L33)

```csharp
int MixPriority { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PlayerSlots** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L21)

```csharp
IProtobufRepeatedFieldValueType<int> PlayerSlots { get; }
```

- Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### **PreDelay** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L30)

```csharp
float PreDelay { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Response** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessage_PlayResponseConditional.cs#L24)

```csharp
string Response { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

