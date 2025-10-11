---
title: CEnvGlobal
---

```csharp
public interface CEnvGlobal : CLogicalEntity, CServerOnlyEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CServerOnlyEntity>, ISchemaClass<CLogicalEntity>, ISchemaClass<CEnvGlobal>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **Counter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvGlobal.cs#L25)

```csharp
ref int Counter { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **Globalstate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvGlobal.cs#L19)

```csharp
string Globalstate { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Initialstate** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvGlobal.cs#L23)

```csharp
ref int Initialstate { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OutCounter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvGlobal.cs#L17)

```csharp
SchemaUntypedField OutCounter { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### **Triggermode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CEnvGlobal.cs#L21)

```csharp
ref int Triggermode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

