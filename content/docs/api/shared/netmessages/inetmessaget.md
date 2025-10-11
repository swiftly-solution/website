---
title: INetMessage<T>
---

```csharp
public interface INetMessage<T> where T : INetMessage<T>, ITypedProtobuf<T>, IDisposable
```

#### Type Parameters

- **T**: 

## Properties

### **MessageId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L7)

```csharp
public static abstract int MessageId { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **MessageName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L8)

```csharp
public static abstract string MessageName { get; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Recipients** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L10)

```csharp
ref CRecipientFilter Recipients { get; }
```

#### Property Value

- [CRecipientFilter](/docs/api/shared/natives/crecipientfilter)

## Methods

### **Send()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L14)

```csharp
void Send()
```

### **SendToAllPlayers()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L19)

```csharp
void SendToAllPlayers()
```

### **SendToPlayer(int)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/INetMessage.cs#L25)

```csharp
void SendToPlayer(int playerId)
```

#### Parameters

- **playerId**: [int](https://learn.microsoft.com/dotnet/api/system.int32) - The player ID.

