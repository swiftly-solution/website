---
title: CLogicBranch
---

```csharp
public interface CLogicBranch : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CLogicBranch>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **InValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranch.cs#L16)

```csharp
ref bool InValue { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **Listeners** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranch.cs#L18)

```csharp
ref CUtlVector<CHandle<CBaseEntity>> Listeners { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseEntity](/docs/api/shared/schemadefinitions/cbaseentity)>>

### **OnFalse** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranch.cs#L22)

```csharp
CEntityIOOutput OnFalse { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnTrue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CLogicBranch.cs#L20)

```csharp
CEntityIOOutput OnTrue { get; }
```

- Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

