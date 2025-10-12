---
title: CSoundOpvarSetPointBase
---

```csharp
public interface CSoundOpvarSetPointBase : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CSoundOpvarSetPointBase>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L16)

```csharp
ref bool Disabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LastPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L22)

```csharp
ref Vector LastPosition { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **OperatorName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L26)

```csharp
string OperatorName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **OpvarIndex** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L30)

```csharp
ref int OpvarIndex { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **OpvarName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L28)

```csharp
string OpvarName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Source** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L18)

```csharp
ref CHandle<CEntityInstance> Source { get; }
```

- Property Value

- [CHandle](/docs/api/shared/natives/chandle-1)<[CEntityInstance](/docs/api/shared/schemadefinitions/centityinstance)>

### **SourceEntityName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L20)

```csharp
string SourceEntityName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **StackName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L24)

```csharp
string StackName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **UseAutoCompare** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L32)

```csharp
ref bool UseAutoCompare { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### **OperatorNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L35)

```csharp
void OperatorNameUpdated()
```

### **OpvarIndexUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L37)

```csharp
void OpvarIndexUpdated()
```

### **OpvarNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L36)

```csharp
void OpvarNameUpdated()
```

### **StackNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L34)

```csharp
void StackNameUpdated()
```

### **UseAutoCompareUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CSoundOpvarSetPointBase.cs#L38)

```csharp
void UseAutoCompareUpdated()
```

