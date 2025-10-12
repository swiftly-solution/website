---
title: MLPlayerState
---

```csharp
public interface MLPlayerState : ITypedProtobuf<MLPlayerState>, INativeHandle
```

- Implements

## Properties

### **Abspos** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L31)

```csharp
Vector Abspos { get; set; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **AccountId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L13)

```csharp
int AccountId { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Armor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L43)

```csharp
int Armor { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Burning** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L61)

```csharp
float Burning { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Clan** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L25)

```csharp
string Clan { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **DefuseKit** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L67)

```csharp
bool DefuseKit { get; set; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Entindex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L19)

```csharp
int Entindex { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Eyeangle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L34)

```csharp
QAngle Eyeangle { get; set; }
```

- Property Value

- [QAngle](/docs/api/shared/natives/qangle)

### **EyeangleFwd** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L37)

```csharp
Vector EyeangleFwd { get; set; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Flashed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L46)

```csharp
float Flashed { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Health** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L40)

```csharp
int Health { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Helmet** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L64)

```csharp
bool Helmet { get; set; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Money** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L52)

```csharp
int Money { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L22)

```csharp
string Name { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **PlayerSlot** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L16)

```csharp
int PlayerSlot { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundKillhs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L58)

```csharp
int RoundKillhs { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **RoundKills** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L55)

```csharp
int RoundKills { get; set; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Smoked** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L49)

```csharp
float Smoked { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Team** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L28)

```csharp
ETeam Team { get; set; }
```

- Property Value

- [ETeam](/docs/api/shared/protobufdefinitions/eteam)

### **Weapons** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/MLPlayerState.cs#L70)

```csharp
IProtobufRepeatedFieldSubMessageType<MLWeaponState> Weapons { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[MLWeaponState](/docs/api/shared/protobufdefinitions/mlweaponstate)>

