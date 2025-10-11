---
title: CSoundEventAABBEntity
---

```csharp
public interface CSoundEventAABBEntity : CSoundEventEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundEventEntity>, ISchemaClass<CSoundEventAABBEntity>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Maxs** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventAABBEntity.cs#L18)

```csharp
ref Vector Maxs { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Mins** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventAABBEntity.cs#L16)

```csharp
ref Vector Mins { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

## Methods

### **MaxsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventAABBEntity.cs#L21)

```csharp
void MaxsUpdated()
```

### **MinsUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundEventAABBEntity.cs#L20)

```csharp
void MinsUpdated()
```

