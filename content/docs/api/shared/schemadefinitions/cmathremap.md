---
title: CMathRemap
---

```csharp
public interface CMathRemap : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CMathRemap>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Enabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L26)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **InMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L18)

```csharp
ref float InMax { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **InMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L16)

```csharp
ref float InMin { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OldInValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L24)

```csharp
ref float OldInValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OnFellBelowMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L37)

```csharp
CEntityIOOutput OnFellBelowMax { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnFellBelowMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L35)

```csharp
CEntityIOOutput OnFellBelowMin { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnRoseAboveMax** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L33)

```csharp
CEntityIOOutput OnRoseAboveMax { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **OnRoseAboveMin** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L31)

```csharp
CEntityIOOutput OnRoseAboveMin { get; }
```

#### Property Value

- [CEntityIOOutput](/docs/api/shared/schemadefinitions/centityiooutput)

### **Out1** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L20)

```csharp
ref float Out1 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **Out2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L22)

```csharp
ref float Out2 { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OutValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CMathRemap.cs#L29)

```csharp
SchemaUntypedField OutValue { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

