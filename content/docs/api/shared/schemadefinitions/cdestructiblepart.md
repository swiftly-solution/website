---
title: CDestructiblePart
---

```csharp
public interface CDestructiblePart : ISchemaClass<CDestructiblePart>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **BodyGroupName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L26)

```csharp
ref CGlobalSymbol BodyGroupName { get; }
```

- Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **DamageLevels** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L29)

```csharp
ref CUtlVector DamageLevels { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **DebugName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L16)

```csharp
ref CGlobalSymbol DebugName { get; }
```

- Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### **DisableHitGroupWhenDestroyed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L20)

```csharp
ref bool DisableHitGroupWhenDestroyed { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **HitGroup** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L18)

```csharp
ref HitGroup_t HitGroup { get; }
```

- Property Value

- [HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)

### **OnlyDestroyWhenGibbing** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L24)

```csharp
ref bool OnlyDestroyWhenGibbing { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **OtherHitgroupsToDestroyWhenFullyDestructed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CDestructiblePart.cs#L22)

```csharp
ref CUtlVector<HitGroup_t> OtherHitgroupsToDestroyWhenFullyDestructed { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[HitGroup_t](/docs/api/shared/schemadefinitions/hitgroup_t)>

