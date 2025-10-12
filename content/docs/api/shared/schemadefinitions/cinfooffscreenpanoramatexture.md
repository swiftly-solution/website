---
title: CInfoOffscreenPanoramaTexture
---

```csharp
public interface CInfoOffscreenPanoramaTexture : CPointEntity, CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CPointEntity>, ISchemaClass<CInfoOffscreenPanoramaTexture>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AdditionalTargetEntities** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L34)

```csharp
ref CUtlVector<CHandle<CBaseModelEntity>> AdditionalTargetEntities { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseModelEntity](/docs/api/shared/schemadefinitions/cbasemodelentity)>>

### **CSSClasses** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L30)

```csharp
ref CUtlVector<CUtlSymbolLarge> CSSClasses { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlSymbolLarge](/docs/api/shared/natives/cutlsymbollarge)>

### **Disabled** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L16)

```csharp
ref bool Disabled { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **LayoutFileName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L22)

```csharp
string LayoutFileName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **RenderAttrName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L24)

```csharp
string RenderAttrName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **ResolutionX** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L18)

```csharp
ref int ResolutionX { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **ResolutionY** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L20)

```csharp
ref int ResolutionY { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TargetChangeCount** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L28)

```csharp
ref int TargetChangeCount { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TargetEntities** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L26)

```csharp
ref CUtlVector<CHandle<CBaseModelEntity>> TargetEntities { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CHandle](/docs/api/shared/natives/chandle-1)<[CBaseModelEntity](/docs/api/shared/schemadefinitions/cbasemodelentity)>>

### **TargetsName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L32)

```csharp
string TargetsName { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### **CSSClassesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L43)

```csharp
void CSSClassesUpdated()
```

### **DisabledUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L36)

```csharp
void DisabledUpdated()
```

### **LayoutFileNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L39)

```csharp
void LayoutFileNameUpdated()
```

### **RenderAttrNameUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L40)

```csharp
void RenderAttrNameUpdated()
```

### **ResolutionXUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L37)

```csharp
void ResolutionXUpdated()
```

### **ResolutionYUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L38)

```csharp
void ResolutionYUpdated()
```

### **TargetChangeCountUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L42)

```csharp
void TargetChangeCountUpdated()
```

### **TargetEntitiesUpdated()** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoOffscreenPanoramaTexture.cs#L41)

```csharp
void TargetEntitiesUpdated()
```

