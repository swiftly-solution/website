---
title: CDamageRecord
---

```csharp
public interface CDamageRecord : ISchemaClass<CDamageRecord>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **ActualHealthRemoved** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L36)

```csharp
ref float ActualHealthRemoved { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **BulletsDamage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L32)

```csharp
ref float BulletsDamage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Damage** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L34)

```csharp
ref float Damage { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **DamagerXuid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L28)

```csharp
ref ulong DamagerXuid { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **IsOtherEnemy** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L42)

```csharp
ref bool IsOtherEnemy { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **KillType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L44)

```csharp
ref EKillTypes_t KillType { get; }
```

#### Property Value

- [EKillTypes_t](/docs/api/shared/schemadefinitions/ekilltypes_t)

### **LastBulletUpdate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L40)

```csharp
ref int LastBulletUpdate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **NumHits** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L38)

```csharp
ref int NumHits { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **PlayerControllerDamager** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L20)

```csharp
ref CHandle<CCSPlayerController> PlayerControllerDamager { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)>

### **PlayerControllerRecipient** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L22)

```csharp
ref CHandle<CCSPlayerController> PlayerControllerRecipient { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerController](/docs/api/shared/schemadefinitions/ccsplayercontroller)>

### **PlayerDamager** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L16)

```csharp
ref CHandle<CCSPlayerPawn> PlayerDamager { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### **PlayerDamagerName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L24)

```csharp
string PlayerDamagerName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **PlayerRecipient** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L18)

```csharp
ref CHandle<CCSPlayerPawn> PlayerRecipient { get; }
```

#### Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CCSPlayerPawn](/docs/api/shared/schemadefinitions/ccsplayerpawn)>

### **PlayerRecipientName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L26)

```csharp
string PlayerRecipientName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **RecipientXuid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L30)

```csharp
ref ulong RecipientXuid { get; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### **ActualHealthRemovedUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L55)

```csharp
void ActualHealthRemovedUpdated()
```

### **DamageUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L54)

```csharp
void DamageUpdated()
```

### **DamagerXuidUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L52)

```csharp
void DamagerXuidUpdated()
```

### **IsOtherEnemyUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L58)

```csharp
void IsOtherEnemyUpdated()
```

### **KillTypeUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L59)

```csharp
void KillTypeUpdated()
```

### **LastBulletUpdateUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L57)

```csharp
void LastBulletUpdateUpdated()
```

### **NumHitsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L56)

```csharp
void NumHitsUpdated()
```

### **PlayerControllerDamagerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L48)

```csharp
void PlayerControllerDamagerUpdated()
```

### **PlayerControllerRecipientUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L49)

```csharp
void PlayerControllerRecipientUpdated()
```

### **PlayerDamagerNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L50)

```csharp
void PlayerDamagerNameUpdated()
```

### **PlayerDamagerUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L46)

```csharp
void PlayerDamagerUpdated()
```

### **PlayerRecipientNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L51)

```csharp
void PlayerRecipientNameUpdated()
```

### **PlayerRecipientUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L47)

```csharp
void PlayerRecipientUpdated()
```

### **RecipientXuidUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDamageRecord.cs#L53)

```csharp
void RecipientXuidUpdated()
```

