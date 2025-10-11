---
title: CDestructiblePart_DamageLevel
---

```csharp
public interface CDestructiblePart_DamageLevel : ISchemaClass<CDestructiblePart_DamageLevel>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **BodyGroupValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L20)

```csharp
ref int BodyGroupValue { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **BreakablePieceName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L18)

```csharp
ref CGlobalSymbol BreakablePieceName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **CustomDeathHandshake** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L28)

```csharp
ref CGlobalSymbol CustomDeathHandshake { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **DamagePassthroughType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L24)

```csharp
ref EDestructiblePartDamagePassThroughType DamagePassthroughType { get; }
```

#### Property Value

- [EDestructiblePartDamagePassThroughType](/docs/api/shared/schemadefinitions/edestructiblepartdamagepassthroughtype)

### **DeathDestroyTime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L32)

```csharp
CRangeFloat DeathDestroyTime { get; }
```

#### Property Value

- [CRangeFloat](/docs/api/shared/schemadefinitions/crangefloat)

### **DestructionDeathBehavior** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L26)

```csharp
ref DestructiblePartDestructionDeathBehavior_t DestructionDeathBehavior { get; }
```

#### Property Value

- [DestructiblePartDestructionDeathBehavior_t](/docs/api/shared/schemadefinitions/destructiblepartdestructiondeathbehavior_t)

### **Health** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L22)

```csharp
CSkillInt Health { get; }
```

#### Property Value

- [CSkillInt](/docs/api/shared/schemadefinitions/cskillint)

### **Name** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L16)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ShouldDestroyOnDeath** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart_DamageLevel.cs#L30)

```csharp
ref bool ShouldDestroyOnDeath { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

